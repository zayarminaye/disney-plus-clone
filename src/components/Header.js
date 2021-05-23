import React from 'react';
import styled from 'styled-components';

export default function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCH</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="data:image/jpeg;base64,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" />
        </Nav>
    )
}

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    cursor: pointer;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`
