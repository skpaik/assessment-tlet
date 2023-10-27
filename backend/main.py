from fastapi import Depends, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app import crud, models
from app.database import SessionLocal, engine
from app.helpers import get_page_limit
from app.number_ops import get_number_stats

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/")
def read_root():
    return {"Tech Lead Evaluation Test": "React and Python"}


@app.get("/number-details/{number}")
def number_details(number: int, db: Session = Depends(get_db)):
    number_stats = get_number_stats(number)
    number_log = update_number_detail(db, number)

    return {
        "number": number,
        "number_detail": number_stats,
        "number_log": number_log
    }


def update_number_detail(db, number):
    db_query_log = crud.get_query_log_by_number(db, number=number)

    if db_query_log:
        db_query_log = crud.update_query_log(db=db, db_query_log=db_query_log)
    else:
        db_query_log = crud.create_query_log(db=db, number=number)

    return db_query_log


@app.get("/popular-queries/")
def popular_queries(request: Request, db: Session = Depends(get_db)):
    query_params = request.query_params
    limit = get_page_limit(query_params)

    db_query_log = crud.get_popular_queries(db, limit=limit)

    return {
        "query_params": query_params,
        "db_query_log": db_query_log,
        "limit": limit
    }
