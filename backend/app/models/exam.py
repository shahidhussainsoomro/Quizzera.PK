from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class ExamBlueprint(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    description: Optional[str] = None
    status: str = "draft"
    created_at: datetime = Field(default_factory=datetime.utcnow)


class Exam(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    blueprint_id: Optional[int] = Field(default=None, foreign_key="examblueprint.id")
    status: str = "draft"
    scheduled_at: Optional[datetime] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)


class ExamRule(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    exam_id: Optional[int] = Field(default=None, foreign_key="exam.id")
    negative_marking: bool = False
    time_limit_minutes: Optional[int] = None
    attempt_limit: int = 1
    instructions: Optional[str] = None
