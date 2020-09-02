import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="Footer">
    <div className="Figure-1"/>
    <div className="Figure-2"/>
    <div className="Figure-3"/>
    <div className="Footer-Container">
      <p className="Footer-Title">
        Credits
      </p>
      <div className="Credits">
        <div className="Credits-Person">
          <div className="Credits-Person-Photo">
            <img src="/assets/zl.png" alt=""/>
          </div>
          <p className="Credits-Person-Name">
            Zoriana Lesyk
          </p>
          <p className="Credits-Person-Position">
            Project lead & Front end development
          </p>
        </div>
        <div className="Credits-Person">
          <div className="Credits-Person-Photo">
            <img src="/assets/yd.png" alt=""/>
          </div>
          <p className="Credits-Person-Name">
            Yoana Dimova
          </p>
          <p className="Credits-Person-Position">
            Project lead & Front end development
          </p>
        </div>
        <div className="Credits-Person">
          <div className="Credits-Person-Photo">
            <img src="/assets/sy.png" alt=""/>
          </div>
          <p className="Credits-Person-Name">
            Sebastian Yepes
          </p>
          <p className="Credits-Person-Position">
            Illustrations, Layout & UI
          </p>
        </div>
        <div className="Credits-Person">
          <div className="Credits-Person-Photo">
            <img src="/assets/hp.png" alt=""/>
          </div>
          <p className="Credits-Person-Name">
             Hans-Peter Dietz
          </p>
          <p className="Credits-Person-Position">
            Front end support
          </p>
        </div>
        <div className="Credits-Person">
          <div className="Credits-Person-Photo">
            <img src="/assets/vk.png" alt=""/>
          </div>
          <p className="Credits-Person-Name">
            Valentin Konov
          </p>
          <p className="Credits-Person-Position">
            Deployment
          </p>
        </div>
        <div className="Credits-Person">
          <div className="Credits-Person-Photo">
            <img src="/assets/ar.jpg" alt=""/>
          </div>
          <p className="Credits-Person-Name">
            Adão Raul
          </p>
          <p className="Credits-Person-Position">
            DevOps
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
