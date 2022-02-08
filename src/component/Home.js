import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Add } from '../redux/actions/action';
import Todo from './Todo';

const Home = () => {

    const [data, setData] = useState("");
    // console.log(data);


    const getdata = useSelector((state) => state.User_data);
    console.log(getdata);

    const dispatch = useDispatch();

    const adddata = () => {
        dispatch(Add(data));
        setData("")
    }

    return <>
        <div className="container">
            <section className='mt-3 text-center'>
                <h3>Enter Your Task</h3>
                <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
                    <input type="text"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        className='form-control'
                        name="task" id="" />
                    <Button variant='contained'
                        className='mx-2'
                        onClick={() => adddata()}
                        style={{ background: "#ee5253" }}>
                        <AddIcon />
                    </Button>
                </div>

                <Todo />

            </section>
        </div>
    </>;
};

export default Home;
