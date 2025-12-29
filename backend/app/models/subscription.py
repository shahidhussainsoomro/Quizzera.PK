from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class Subscription(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    institution_id: Optional[int] = Field(default=None, foreign_key="institution.id")
    plan_name: str
    status: str = "active"
    start_date: datetime = Field(default_factory=datetime.utcnow)
    end_date: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
