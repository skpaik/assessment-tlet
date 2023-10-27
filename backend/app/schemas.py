from pydantic import BaseModel


class QueryLog(BaseModel):
    id: int
    number: int
    hit_count: int

    class Config:
        orm_mode = True
