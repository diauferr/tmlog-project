import React from "react";

import * as S from "./styles";

import Logo from "../../../assets/logo-full-blue.svg";
import IconInsta from "../../../assets/icon-instagram.svg";
import IconLinked from "../../../assets/icon-linkedin.png";
import IconTwitter from "../../../assets/icon-twitter.png";

export const Footer = () => {
    return (
        <S.Container>
            <img className="logo" src={Logo}></img>
            <div className="links">
                <h4>Useful links</h4>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Quote</a>
                    </li>
                </ul>
            </div>
            <div className="touch">
                <h4>Get in touch</h4>
                <p>
                    Giovanni Battista Pirelli, 271 - SL 207 - Vila Homero Thon,
                    Santo André - SP, 09111-340
                </p>
                <p>
                    Tel:
                    <a href="tel:+551149785939"> +55 114978-5939</a>
                </p>
                <a href="mailto:contato@tmlog.com.br">contato@tmlog.com.br</a>
            </div>
            <div className="social">
                <h4>Social media</h4>
                <S.SocialIcons>
                    <a
                        href="https://www.linkedin.com/company/tmloglogistics/"
                        target="_blank"
                    >
                        <img className="icon" src={IconLinked} alt="" />
                    </a>
                    <a
                        href="https://www.instagram.com/tmloglogistics/"
                        target="_blank"
                    >
                        <img
                            style={{ width: "35px", marginRight: "10px" }}
                            src={IconInsta}
                            alt=""
                        />
                    </a>
                    <a
                        href="https://twitter.com/tmlog_logistics"
                        target="_blank"
                    >
                        <img className="icon" src={IconTwitter} alt="" />
                    </a>
                </S.SocialIcons>
            </div>
        </S.Container>
    );
};
