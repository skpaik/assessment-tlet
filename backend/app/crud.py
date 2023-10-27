from sqlalchemy.orm import Session

from . import models, schemas


def get_query_log_by_number(db: Session, number: int):
    return db.query(models.QueryLog).filter(models.QueryLog.number == number).first()


def create_query_log(db: Session, number: int):
    new_query_log = models.QueryLog(number=number)
    db.add(new_query_log)
    db.commit()
    db.refresh(new_query_log)
    return new_query_log


def update_query_log(db: Session, db_query_log: schemas.QueryLog):
    db_query_log.hit_count = db_query_log.hit_count + 1
    db.commit()
    db.refresh(db_query_log)
    return db_query_log
