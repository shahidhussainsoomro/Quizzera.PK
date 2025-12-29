from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel


class Institution(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    code: Optional[str] = Field(default=None, index=True)
    address: Optional[str] = None
    contact_email: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
