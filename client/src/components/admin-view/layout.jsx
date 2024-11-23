import { Outlet } from "react-router-dom"
const { default: AdminSidebar } = require("./sidebar");
const { default: AdminHeader } = require("./header");



function AdminLayout(){
    return (
        <div className="flex min-h-screen w-full">
            {
                <AdminSidebar></AdminSidebar>

            }
            <div className="='flex flex-1 flex-col">
                {
                <AdminHeader></AdminHeader>
                }
                <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
                <Outlet/>
                </main>
            </div>
        </div>

    );
}
export default AdminLayout;