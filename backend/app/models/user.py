from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel

from app.core.rbac import RoleType


class Role(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: RoleType = Field(index=True)
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)


class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    hashed_password: str
    full_name: Optional[str] = None
    is_active: bool = True
    is_verified: bool = False
    role_id: Optional[int] = Field(default=None, foreign_key="role.id")
    institution_id: Optional[int] = Field(default=None, foreign_key="institution.id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
