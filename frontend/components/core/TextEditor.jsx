import React, { useState, useEffect } from 'react'
import { Grid, Collapse, IconButton, useTheme, TextField } from '@material-ui/core'
import { BoldIcon, UnderlineIcon, ItalicIcon, MyTypography, LinkIcon, CodeIcon, Header1Icon, Header2Icon, TextColorIcon, AlignRightIcon, AlignCenterIcon, ImageIcon } from './'


export default ({ name, onChange, value, ...rest }) => {

  const theme = useTheme()
  const [cursorPosition, setCursorPostion] = useState(0)

  // const createBlock = (block) => {
  //   let textArea = document.getElementById('editor')
  //   if (typeof(textArea.selectionStart) != 'undefined') {
  //     const { selectionStart } = textArea
  //     let i = selectionStart
  //     while (textArea.value[i] !== '\n' && i >= 0) {
  //       console.log(textArea.value[i])
  //       i--;
  //     }
  //     i += 1
  //     let begin = textArea.value.substr(0, i)
  //     let end = textArea.value.substr(i)
  //     onChange({ target: {
  //       name: name,
  //       value: begin + block + end
  //     }})
  //   }
  // }

  useEffect(() => {
    if (cursorPosition) {
      let textArea = document.getElementById('editor')
      textArea.selectionEnd = cursorPosition
      setCursorPostion(0)
    }
  }, [value])

  const wrapText = (tag, closeTag = tag) => {
    let textArea = document.getElementById('editor')
    let openTag = tag

    if (typeof(textArea.selectionStart) != 'undefined') {
      const { selectionStart, selectionEnd } = textArea
      let begin = textArea.value.substr(0, selectionStart)
      let selection = textArea.value.substr(selectionStart, selectionEnd - selectionStart)
      let end = textArea.value.substr(selectionEnd)
      setCursorPostion(selectionEnd + tag.length)
      onChange({ target: {
        name: name,
        value: begin + openTag + selection + closeTag + end
      }})
    }
  }

  const TEXT_ACTIONS = [
    { Icon: BoldIcon, tag: '**' },
    { Icon: ItalicIcon, tag: '*' },
    { Icon: UnderlineIcon, tag: '<u>', closeTag: '</u>'},
    { Icon: AlignCenterIcon, tag: '<center>', closeTag: '</center>'},
    { Icon: LinkIcon, tag: '[', closeTag: '](your_link_here)' },
    //{ Icon: AlignRightIcon, tag: 'right' },
    { Icon: () => <TextColorIcon color="primary"/>, tag: '<colored>', closeTag: '</colored>' },
    { Icon: CodeIcon, tag: '```' },
    { Icon: Header1Icon, tag: '#', closeTag: '' },
    { Icon: Header2Icon, tag: '##', closeTag: '' },
    { Icon: ImageIcon, tag: '![', closeTag: '](your_image_link_here)' }
  ]

  return (
    <React.Fragment>
      <TextField
        {...rest}
        id="editor"
        name={name}
        value={value}
        onChange={onChange}
        rowsMax={20}
        multiline
      />
      <Collapse in={true}>
        <div style={{ backgroundColor: theme.palette.contrast.medium, borderRadius: theme.shape.borderRadius, marginTop: theme.spacing(0.5)}}>
          {TEXT_ACTIONS.map(action => (
            <IconButton key={action.tag} onClick={() => wrapText(action.tag, action.closeTag)}>
              <action.Icon/>
            </IconButton>
          ))}
        </div>
      </Collapse>
    </React.Fragment>
  )
}