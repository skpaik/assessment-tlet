from typing import Union

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.database import SessionLocal, engine

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
    query_log: schemas.QueryLog

    db_query_log = crud.get_query_log_by_number(db, number=number)

    if db_query_log:
        db_query_log = crud.update_query_log(db=db, db_query_log=db_query_log)
    else:
        db_query_log = crud.create_query_log(db=db, number=number)

    return {"number": number, "details": db_query_log}


@app.get("/popular-queries/")
def popular_queries(q: Union[str, None] = None):
    return {"q": q}
