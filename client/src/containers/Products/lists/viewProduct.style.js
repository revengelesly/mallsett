import styled from "styled-components";
import { palette } from "styled-theme";
import { transition, borderRadius } from "../../../settings/style-util";
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
`;

export default WithDirection(SideCartWrapper);
