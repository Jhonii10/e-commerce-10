import { useSelector } from 'react-redux';

const AdminOnlyRoute = ({children}) => {

    const {email} = useSelector((state)=>state.auth);
    
    if (email === 'jhoni@gmail.com') {
        return children;
    }else{
        return null;
    }
}

export default AdminOnlyRoute;
