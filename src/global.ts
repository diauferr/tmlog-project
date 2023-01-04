// globalStyles.js
import { createGlobalStyle } from "styled-components";

import PoppinsBlack from "../src/fonts/Poppins-Black.ttf";
import PoppinsBlackItalic from "../src/fonts/Poppins-BlackItalic.ttf";
import PoppinsBold from "../src/fonts/Poppins-Bold.ttf";
import PoppinsBoldItalic from "../src/fonts/Poppins-BoldItalic.ttf";
import PoppinsExtraBold from "../src/fonts/Poppins-ExtraBold.ttf";
import ExtraBoldItalic from "../src/fonts/Poppins-ExtraBoldItalic.ttf";
import PoppinsExtraLight from "../src/fonts/Poppins-ExtraLight.ttf";
import ExtraLightItalic from "../src/fonts/Poppins-ExtraLightItalic.ttf";
import PoppinsItalic from "../src/fonts/Poppins-Italic.ttf";
import PoppinsLightItalic from "../src/fonts/Poppins-LightItalic.ttf";
import PoppinsMedium from "../src/fonts/Poppins-Medium.ttf";
import PoppinsMediumItalic from "../src/fonts/Poppins-MediumItalic.ttf";
import PoppinsRegular from "../src/fonts/Poppins-Regular.ttf";
import PoppinsSemiBold from "../src/fonts/Poppins-SemiBold.ttf";
import PoppinsSemiBoldItalic from "../src/fonts/Poppins-SemiBoldItalic.ttf";
import PoppinsThin from "../src/fonts/Poppins-Thin.ttf";
import PoppinsThinItalic from "../src/fonts/Poppins-ThinItalic.ttf";

export const GlobalStyle = createGlobalStyle`

		@font-face {
		font-family: 'Poppins Thin';
		src: local('Poppins Thin'), local('PoppinsThin'),
		url(${PoppinsThin}) format('truetype');
		font-weight: 100;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Thin Italic';
		src: local('Poppins Thin Italic'), local('PoppinsThinItalic'),
		url(${PoppinsThinItalic}) format('truetype');
		font-weight: 100;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Extra Light';
		src: local('Poppins Extra Light'), local('PoppinsExtraLight'),
		url(${PoppinsExtraLight}) format('truetype');
		font-weight: 200;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Extra Light Italic';
		src: local('Poppins Extra Light Italic'), local('ExtraLightItalic'),
		url(${ExtraLightItalic}) format('truetype');
		font-weight: 200;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Light Italic';
		src: local('Poppins Light Italic''), local('PoppinsLightItalic'),
		url(${PoppinsLightItalic}) format('truetype');
		font-weight: 300;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Regular';
		src: local('Poppins Regular'), local('PoppinsRegular'),
		url(${PoppinsRegular}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Italic';
		src: local('Poppins Italic'), local('PoppinsItalic'),
		url(${PoppinsItalic}) format('truetype');
		font-weight: 400;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Medium';
		src: local('Poppins Medium'), local('PoppinsMedium'),
		url(${PoppinsMedium}) format('truetype');
		font-weight: 500;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Medium Italic';
		src: local('Poppins Medium Italic'), local('PoppinsMediumItalic'),
		url(${PoppinsMediumItalic}) format('truetype');
		font-weight: 500;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Semi Bold';
		src: local('Poppins Semi Bold'), local('PoppinsSemiBold'),
		url(${PoppinsSemiBold}) format('truetype');
		font-weight: 600;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Semi Bold Italic';
		src: local('Poppins Semi Bold Italic'), local('PoppinsSemiBoldItalic'),
		url(${PoppinsSemiBoldItalic}) format('truetype');
		font-weight: 600;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Bold';
		src: local('Poppins Bold'), local('PoppinsBold'),
		url(${PoppinsBold}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Bold Italic';
		src: local('Poppins Bold Italic'), local('PoppinsBoldItalic'),
		url(${PoppinsBoldItalic}) format('truetype');
		font-weight: 700;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Extra Bold';
		src: local('Poppins Extra Bold'), local('PoppinsExtraBold'),
		url(${PoppinsExtraBold}) format('truetype');
		font-weight: 800;
		font-style: normal;
	}

	@font-face {
		font-family: 'Poppins Extra Bold italic';
		src: local('Poppins Extra Bold italic'), local('ExtraBoldItalic'),
		url(${ExtraBoldItalic}) format('truetype');
		font-weight: 800;
		font-style: italic;
	}

	@font-face {
		font-family: 'Poppins Black';
		src: local('Poppins Black'), local('PoppinsBlack'),
		url(${PoppinsBlack}) format('truetype');
		font-weight: 900;
		font-style: normal;
	}
	@font-face {
		font-family: 'Poppins Black Italic';
		src: local('Poppins Black Italic'), local('PoppinsBlackItalic'),
		url(${PoppinsBlackItalic}) format('truetype');
		font-weight: 900;
		font-style: italic;
	}
  	body {
		margin: 0;
		padding: 0;
		font-family: Open-Sans, Helvetica, Sans-Serif;
  	}
`;

export default GlobalStyle;
