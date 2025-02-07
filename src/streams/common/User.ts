export default interface User {

    /**
     * The user id that performed this change. This is optional, and will
     * not be present for anonymous users.
     */
    user_id?: number;

    /** The text representation of the user that performed this change. */
    user_text: string;

    /** A list of the groups this user belongs to. E.g. bot, sysop etc. */
    user_groups: string[];

    /**
     * True if this user is considered to be a bot at the time of this
     * event. This is checked via the $user->isBot() method, which
     * considers both user_groups and user permissions.
     */
    user_is_bot: string

    /**
     * The datetime of the user account registration. Not present for
     * anonymous users or if missing in the MW database.
     */
    user_registration_dt?: string;

    /**
     * The number of edits this user has made at the time of this event.
     * Not present for anonymous users.
     */
    user_edit_count?: string;

}