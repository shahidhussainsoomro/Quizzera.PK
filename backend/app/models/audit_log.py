from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class AuditLog(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    actor_user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    action: str
    resource_type: str
    resource_id: Optional[str] = None
    metadata: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
