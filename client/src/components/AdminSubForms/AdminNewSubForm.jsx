import React, { useState } from "react";
import {Image} from 'cloudinary-react';
import axios from "axios";


const AdminNewSubForm = ({ handleFormSubmit }) => {
  const [subscription_name, setSubscription_name] = useState("");
  const [subscription_price, setSubscription_price] = useState("");
  const [subscription_thumbnail, setSubscription_thumbnail] = useState("");
  const [subscription_category, setSubscription_category] = useState("");
  const [publicIds, setPublicIds] = useState("");
  const [fileSelection, setFileSelection] = useState("");

  let fileInput = React.createRef();

  const uploadImage = () => {
    // console.log(files[0]);
    const formData = new FormData();
    formData.append("file", fileSelection);
    formData.append("upload_preset", "ovmknpts");

    axios.post("https://api.cloudinary.com/v1_1/elephante-freshamonte/image/upload", formData).then((response) => {
      console.log(response.data);
      setPublicIds(response.data.public_id);
      console.log(response.data.secure_url);
      setSubscription_thumbnail("" + response.data.secure_url);
    })
    
  };

  
  return (
    <div>
      <>
        <form
          className="col s11 offset-m1"
          onSubmit={(e) => {
            handleFormSubmit(e, {
              subscription_name: subscription_name,
              subscription_price: 
                subscription_price,
              subscription_thumbnail: subscription_thumbnail,
              subscription_category: subscription_category,
            });
            uploadImage();
          }}
        >
          <div className="row" style={{fontFamily: 'Roboto'}}>
            <div className="input-field col s10">
              <input
                placeholder="Enter new subscription name"
                id="subscription_name"
                type="text"
                value={subscription_name}
                onChange={(e) => {
                  setSubscription_name(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <div className="col s9">
                <div className="input-field col s4">
                  <input
                  placeholder="Plan pricing"
                    id="subscription_price"
                    type="text"
                    value={subscription_price}
                    onChange={(e) => {
                      setSubscription_price(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <input type="file" ref={fileInput} onChange={(e) => {setFileSelection(e.target.files[0])}}/>
            <Image style={{height: 200}}
            cloudName="elephante-freshamonte" publicId={publicIds} src={subscription_thumbnail} />

          </div>
          {/* Will need to edit this later to accept a url for when admin wants to add a thumbnail sized logo */}
          {/* <div className="row">
            <div className="input-field col s10">
              <input
              placeholder="Subscription Logo"
                id="subscription_thumbnail"
                type="text"
                value={subscription_thumbnail}
                onChange={(e) => {
                  setSubscription_thumbnail(e.target.value);
                }}
              />
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col s10">
              <UploadComponent />
            </div>
          </div> */}
          {/* Original code in case this doesn't work */}
          {/* <div className="row">
            <div className="input-field col s10">
              <input
              placeholder="Subscription Logo"
                id="subscription_thumbnail"
                type="text"
                value={subscription_thumbnail}
                onChange={(e) => {
                  setSubscription_thumbnail(e.target.value);
                }}
              />
            </div>
          </div> */}
          <div className="row">
            <div className="input-field col s10">
              <input
              placeholder="Service Type"
                id="subscription_category"
                type="text"
                value={subscription_category}
                onChange={(e) => {
                  setSubscription_category(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col s9">
              <button className="waves-effect waves-light btn-large" style={{borderRadius: 30, backgroundColor: "#008000", fontFamily: 'Roboto'}}>
                <i className="material-icons right">create</i>Add New
                Subscription
              </button>
            </div>
          </div>
        </form>
      </>
    </div>
  );
};

export default AdminNewSubForm;
