import { React, useState, useContext } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { Remove } from "../redux/actions/action";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Update_data } from "../redux/actions/action";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { DeletContext } from "../component/context/ContextProvider"

const Todo = () => {

    const getdata = useSelector((state) => state.User_data);
    // console.log(getdata);

    const { deleteuser, setDeleteuser } = useContext(DeletContext)

    const [show, setShow] = useState(false);

    // open modal for eye click button
    const [showeye,setShoweye] = useState(false);

    // set eye button open time value
    const [showeyevalue,setShoweyeValue] = useState("");

    // here we have set userupdate value
    const [update, setUpdate] = useState("");
    // console.log(update);

    // using this id we have update user value in todo app
    const [ind, setInd] = useState("");
    // console.log(ind);

    const handleClose = () => setShow(false);
    const handleShow = (el) => {
        setShow(true);
        setUpdate(el)
    }

    const dispatch = useDispatch();

    // userremove function
    const remove = (id) => {
        dispatch(Remove(id));
        setDeleteuser(true);
    }

    // userupdate function
    const user_update = () => {
        dispatch(Update_data(update, ind))
        handleClose();
    }

    return <>
        <div className="todo_data col-lg-5 mx-auto mt-2">
            {
                getdata.map((ele, k) => {
                    return (
                        <>
                            <div className="todo_container d-flex justify-content-between px-2 mb-3 align-items-center"
                                style={{ background: "#dcdde1", borderRadius: "3px", height: "45px" }}
                                key={ele.length}
                            >
                                <li style={{ listStyle: "none" }}>{ele}</li>
                                <div className="edit_dlt  col-lg-3 py-2 d-flex justify-content-between align-items-center">
                                    <ModeEditIcon style={{ color: "#3c40c6", cursor: "pointer" }} onClick={() => {
                                        handleShow(ele)
                                        setInd(k)
                                    }} />
                                    <DeleteIcon style={{ color: "red", cursor: "pointer" }}
                                        onClick={() => remove(k)}
                                    />
                                    <RemoveRedEyeIcon style={{ color: "#1dd1a1", cursor: "pointer" }}
                                    onClick={()=>{
                                        setShoweye(true)
                                        setShoweyeValue(ele)
                                        }}
                                     />
                                </div>
                            </div>
                        </>
                    )
                })
            }


            <Modal show={show} onHide={handleClose}>
                <h3 className='text-center mt-2'>Update Your Data</h3>
                <Modal.Header>
                    <div className="todo col-lg-5 mx-auto mb-2 d-flex justify-content-between">
                        <input type="text"
                            value={update}
                            onChange={(e) => setUpdate(e.target.value)}
                            className='form-control mt-2 col-lg-5'
                            name="task" id="" />
                    </div>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleClose()
                        user_update()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* eye button modal */}
            <Modal show={showeye}>
                <h1 className='text-center'>{showeyevalue}</h1>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>setShoweye(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    </>;
};

export default Todo;
