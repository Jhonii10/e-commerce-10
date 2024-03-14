import { useSelector } from 'react-redux';

const AdminOnlyRoute = ({children}) => {

    const {email} = useSelector((state)=>state.auth);
    
    if (email === process.env.REACT_APP_ADMIN_USER) {
        return children;
    }else{
        return null;
    }
}

export default AdminOnlyRoute;
