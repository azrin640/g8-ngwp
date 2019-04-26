export interface Auth {
    token: string,
    token_expires: Date,
    user: {
        caps: {
            administrator: boolean,
        },
        data: {
            ID: string,
            display_name: string,
            user_email: string,
            user_login: string,
            user_nicename: string,
            user_pass: string,
            user_registered: Date
        },
        roles: [
            
        ]
    }
}
