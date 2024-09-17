import NavAdmin from "@/components/nav-admin";
import PageAdmin from "@/components/page-admin";

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return <>
        <NavAdmin />
        <PageAdmin>{children}</PageAdmin>
    </>;
};

export default AdminLayout;