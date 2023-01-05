import styled from "styled-components";

export const Container = styled.div`
	background-color: ${props => props.theme.color.primary};
	  
	  .app {
		padding: 20px 0;
		display: grid;
		grid-gap: 20px 0;
		grid-template-columns: 20px 1fr 20px;
		align-content: start;
	  }
	  
	  .app > * {
		grid-column: 2 / -2;
	  }
	  
	  .app > .full {
		grid-column: 1 / -1;
	  }
	  
	  .hs {
		display: grid;
		grid-gap: calc(20px / 2);
		grid-template-columns: 10px;
		grid-template-rows: minmax(150px, 1fr);
		grid-auto-flow: column;
		grid-auto-columns: calc(50% - 20px * 2);
	  
		overflow-x: scroll;
		scroll-snap-type: x proximity;
		padding-bottom: calc(.75 * 20px);
		margin-bottom: calc(-.25 * 20px);
	  }
	  
	  .hs:before,
	  .hs:after {
		content: '';
		width: 10px;
	  }
	  
	  
	  /* Demo styles */
	  
	  html,
	  body {
		height: 100%;
	  }
	  
	  body {
		display: grid;
		place-items: center;
		background: #456173;
	  }
	  
	  ul {
		list-style: none;
		padding: 0;
	  }
	  
	  h1,
	  h2,
	  h3 {
		margin: 0;
	  }
	  
	  .app {
		width: 375px;
		height: 667px;
		background: #DBD0BC;
		overflow-y: scroll;
	  }
	  
	  .hs > li,
	  .item {
		scroll-snap-align: center;
		padding: calc(20px / 2 * 1.5);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: #fff;
		border-radius: 8px;
	  }
	  
	  
	  
	  .no-scrollbar {
		scrollbar-width: none !important;
		margin-bottom: 0;
		padding-bottom: 0;
	  }
	  .no-scrollbar::-webkit-scrollbar {
		display: none;
	  }
`;

export const Card = styled.div`
	font-family: 'Poppins Black', sans-serif;
	background-color: blue;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(6, calc(50% - 40px));
	grid-template-rows: minmax(150px, 1fr);
	font-size: 48px;
`;
