import styled from "styled-components";
import WithDirection from "../../settings/withDirection";

const SideCartWrapper = styled.div`
.shopping-cart{
	border: 1px solid #999;
	background: #fff;
	margin-bottom: 5px;
	padding-top: 20px;

}
.shopping-cart-header{
	border-width: 80%;
	padding-bottom: 10px;
	padding-top: 10px;
	margin-bottom: 10px;
}
.merchant-group{
	margin-bottom: 2px;
}
.merchant-group-header{
	color: #00a99d;
	font-weight: bold;
	font-style: italic;
	font-size: 11px;

}
.delivery-group-header{
	color: #99875;
	font-weight: bold;
	font-style: italic;
	border-top: 1px dashed #998675;
	padding: 5px 0px
}

.item-group-header{
	color: #000000;
	font-weight: bold;
	font-size: .9em;
}
.item-group-header > span{
	color: #99875;
	font-size: .9em;
}
span.cart-span{
	font-size: .9em;
	color: #bd0016;
}
row.delivery-item {
	margin-bottom: 0px;
}
.border-top-bottom{
	border-top: 1px dashed #3f1f04;
	border-bottom: 1px dashed #3f1f04;
}

.management-btn{
	margin-bottom: 10px;
	text-align: center;
	display: inline-block;
}

.management-btn-map{
	margin-bottom: 10px;
	text-align: center;
}
.management-btn .btn, .management-btn-map .btn{
	border-radius: 0px;
	max-width: 100%;

}

.cart-item-count{
	background: #3f1f04;
	border-radius: 50%;
	padding: 5px;
	color: #fff;
	margin-bottom: 15px;
}
.text-right{
	text-align: right;
}
.green-text{
	color: #00a99d;
}
`;

export default WithDirection(SideCartWrapper);
