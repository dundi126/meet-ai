import { DropdownMenu,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/generated-avatar";



export const DashboardUserButton = () => {
    const { data, isLoading } = authClient.useSession();
    
    if (isLoading || !data?.user) {
        return <p>Loading...</p>
    }

    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-center bg-white/5 hover:bg-white/10 overflow-hidden">
                { 
                    data.user.image ? (
                        <Avatar>
                            <AvatarImage src={data?.user?.image || undefined} />
                        </Avatar>
                    ) : (
                            // <GeneratedAvatar seed={data.user.name} varient="initials" className="size-9 mr-3"/>
                            <img src="/avatar.png" alt="Default Avatar" className="size-9 mr-3 rounded-full" />
                    )
                }

            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}
