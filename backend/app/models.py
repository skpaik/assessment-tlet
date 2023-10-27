from sqlalchemy import Column, Integer

from .database import Base


class QueryLog(Base):
    __tablename__ = "query_log"

    id = Column(Integer, primary_key=True, index=True)

    number = Column(Integer, index=True)

    hit_count = Column(Integer, default=1)
