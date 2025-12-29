from typing import Optional

from pydantic import BaseModel, EmailStr


class ProfileUpdate(BaseModel):
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None
    phone: Optional[str] = None
    locale: Optional[str] = None
    bio: Optional[str] = None
