import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: "web-vite-app",
    access: (allow: any) => ({
        'public/*': [
            allow.guest.to(['get', 'list']),
            allow.authenticated.to(['read', 'write', 'delete']),
            // allow.entity('admin').to(['read', 'write', 'delete'])
            allow.groups(["Admins", "Managers",]).to(["write", "delete", "read"]),
        ]
    })
})