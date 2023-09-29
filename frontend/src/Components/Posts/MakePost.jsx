import { useState } from "react";
import Input from "../InputField/InputField";
import "./post.css";
import {createPost} from "../../Redux/postSlide"
import { useDispatch } from "react-redux";
const MakePost = (props) => {
  const {setOpen} = props;
  const [title, setTitle] = useState("Add a title");
  const [description, setDescription] = useState("Add some description");
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const [selectIdx, setSelectIdx] = useState(0);
  const dispatch = useDispatch();
  const handlePost = () =>{
    setOpen(false);
    const newPost = {
      title: title,
      description: description,
      tag:selectIdx
    }
    dispatch(createPost(newPost))
  }
  const handleClose = () =>{
    setOpen(false);
     
  }

  return (
    <section className="makepost-container">
      <div className="close" style={{position: "absolute", left: "20px", top: "37%"}} onClick={handleClose}>
        X
      </div>
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>Post</p>
      </div>
      <Input
        data={title}
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={description}
        inputType="textarea"
        setData={setDescription}
        label="Description"
        classStyle="makepost-desc"
      />

      <label>Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => {
          return (
            <button
              key={idx}
              className={`${
                selectIdx === idx
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectIdx(idx)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MakePost;
