import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import Tags from '../../../components/uielements/tag';
import Input from '../../../components/uielements/input';
import Tooltip from '../../../components/uielements/tooltip';
import Button from '../../../components/uielements/button';
import PageHeader from '../../../components/utility/pageHeader';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import ContentHolder from '../../../components/utility/contentHolder';
import basicStyle from '../../../config/basicStyle';
import IntlMessages from '../../../components/utility/intlMessages';
import TagWrapper from './tag.style';

const CheckableTag = Tags.CheckableTag;

const Tag = props => (
  <TagWrapper>
    <Tags {...props}>{props.children}</Tags>
  </TagWrapper>
);

const tagsFromServer = ['Movie', 'Books', 'Music'];

class MerchantItemCard extends Component {
  state = {
    selectedTags: [],
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: ''
  };
  log = e => {};
  handleChange = (tag, checked) => {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    this.setState({ selectedTags: nextSelectedTags });
  };
  preventDefault = e => {
    e.preventDefault();
  };
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };
  showInput = () => {
    this.setState({ inputVisible: true }, () => {
      document.getElementById('MerchantCategoryInputTag').focus();
    });
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ''
    });
  };
  render() {
    const { selectedTags, tags, inputVisible, inputValue } = this.state;
    const { rowStyle, colStyle, gutter } = basicStyle;
    return (

              <div>
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 20;
                  const tagElem = (
                    <Tag
                      key={tag}
                      closable={index !== 0}
                      afterClose={() => this.handleClose(tag)}
                    >
                    <a href="#">
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                      </a>
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag}>{tagElem}</Tooltip>
                  ) : (
                    tagElem
                  );
                })}
                {inputVisible && (
                  <Input
                    id="MerchantCategoryInputTag"
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                  />
                )}
                {!inputVisible && (
                  <Button size="small" type="dashed" onClick={this.showInput}>
                    <Icon type="plus-circle-o" /> {<IntlMessages id="uiElements.tags.MerchantCategoryInputTag" />}
                  </Button>
                )}
              </div>

    );
  }
}


export default MerchantItemCard;