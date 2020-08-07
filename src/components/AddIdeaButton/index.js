import React, {useCallback} from 'react';
import './AddIdeaButton.css'
import * as addNewIdea from "../AddNewIdea/actions";
import { useDispatch } from "react-redux";

const AddIdeaButton = ({
  dispatch
}) => {

    dispatch = useDispatch();

    const openAddNewIdeaOverlay = useCallback(() => {
        dispatch(addNewIdea.open())
    }, [dispatch]);

    return (
        <div className="AddIdeaButton"
             onClick={() => openAddNewIdeaOverlay()}>
            <div className="AddIdeaButton-Background"/>
        </div>
    )
};

export default AddIdeaButton;