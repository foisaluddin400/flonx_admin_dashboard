<<<<<<< HEAD
import { useState, useRef, useEffect } from "react";
=======
import { useState, useRef } from "react";
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
import JoditEditor from "jodit-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Navigate } from "../../Navigate";
<<<<<<< HEAD
import { message, Spin } from "antd";
import { useGetPrivecyQuery, usePostPrivecyMutation } from "../redux/api/manageApi";

const PrivacyPolicy = () => {
  
  const [addTerms, {isLoading}] = usePostPrivecyMutation();
  const { data: termData } = useGetPrivecyQuery();
  console.log(termData);
  const editor = useRef(null);
  const [content, setContent] = useState("");


  const handleTerms = async () => {
    const data = {
      description: content,
    };


    const res = await addTerms(data).unwrap();
 

    message.success(res?.message);
  };
=======

const PrivacyPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  // const [isLoading, seLoading] = useState(false)
  const navigate = useNavigate();
  // const handleTerms = () => {
  //     console.log(content)
  // }
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
<<<<<<< HEAD
      height: 600,
=======
      height: 650,
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
    },
    buttons: [
      "image",
      "fontsize",
      "bold",
      "italic",
      "underline",
      "|",
      "font",
      "brush",
      "align",
    ],
  };

<<<<<<< HEAD
  useEffect(() => {
    setContent(termData?.data?.description);
  }, [termData]);
=======
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
  return (
    <div className="  p-3 ">
       <Navigate title="Privacy Policy" />

      <JoditEditor
      
<<<<<<< HEAD
          ref={editor}
=======
        ref={editor}
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
<<<<<<< HEAD
      />

      <div className="mt-5 flex justify-center">
        <button   type="submit"
                disabled={isLoading}
                  onClick={handleTerms}
                className={`px-4 py-3 rounded text-white flex justify-center items-center gap-2 ${
                  isLoading ? "bg-[#b879ff]" : "bg-[#822CE7] hover:bg-[#4a0e8f]"
                }`}
              >
                {isLoading ? (
                  <>
                    <Spin size="small" />
                    <span>Updating...</span>
                  </>
                ) : (
                  "Update"
                )}
=======
        // onChange={newContent => { }}
      />

      <div className="mt-5 flex justify-center">
        <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
          Save & change
>>>>>>> 5f8646040732fee62fae286a9e1a6aa760b51f59
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
