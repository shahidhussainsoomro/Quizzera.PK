from enum import Enum


class RoleType(str, Enum):
    admin = "Admin"
    teacher = "Teacher"
    mentor = "Mentor"
    student = "Student"
    institution = "Institution"
