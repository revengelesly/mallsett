import styled from "styled-components";
import WithDirection from "../../../settings/withDirection";

const SideCartWrapper = styled.div`

.optionDashed{
	color: #99875;
	font-weight: bold;
	font-style: italic;
	border-top: 1px dashed #998675;
	border-bottom: 1px dashed #998675;
	padding: 5px 0px
}

.fullWidth{
	width: 100%;
}
.textRight{
	text-align: right;
}

.ant-carousel .slick-slide {
	text-align: center;
	height: 160px;
	line-height: 160px;
	background: #364d79;
	overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
	color: #fff;
  }
`;

export default WithDirection(SideCartWrapper);
