import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Input, Tag, theme } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';

const Filter: React.FC = () => {
 
  const [tags, setTags] = useState(['order data', 'Customer', 'clear ALl']);
  const [inputVisible, setInputVisible] = useState(false);
 
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

 

 

  const forMap = (tag: string) => (
    <span key={tag} style={{ display: 'inline-block' }}>
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    </span>
  );

  const tagChild = tags.map(forMap);

 

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          appear={false}
          enter={{ scale: 0.8, opacity: 0, type: 'from', duration: 100 }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              (e.target as any).style = 'display: inline-block';
            }
          }}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      
    </>
  );
};

export default Filter;