import {InstitutionMenuItem} from "../../../models/InstitutionMenuItem";
import {Permission} from "../../../models/Permission";


export const InstitutionMenuItems: Array<InstitutionMenuItem> = [
    // {
    //     name: "institutionCalendar",
    //     label: "institution_calendar",
    //     icon: "calendar-alt",
    //     permission: Permission.READ_INSTITUTION,
    //     route: "InstitutionCalendar"
    // },
    // {
    //     name: "lessons",
    //     label: "lesson.plural",
    //     icon: "book",
    //     permission: Permission.READ_OWN_LESSON,
    //     route: "LessonWeek"
    // },
    {
        name: "reportCard",
        label: "report_card.plural",
        icon: "graduation-cap",
        permission: Permission.READ_OWN_GRADE,
        route: "Gradetable"
    },
    {
        name: "finance",
        label: "finance",
        icon: "money-bill",
        permission: Permission.READ_OWN_DEBT,
        route: "Finance"
    },
    {
        name: "classrooms",
        label: "classroom.plural",
        icon: "chalkboard",
        permission: Permission.READ_OWN_CLASSROOM,
        route: "Classroom"
    },
]