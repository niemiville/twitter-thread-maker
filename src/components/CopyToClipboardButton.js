import { Snackbar, IconButton } from '@mui/material'
import { useState } from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

const CopyToClipboardButton = ({tweet}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(tweet)
    }
    
    return (
        <>
          <Tooltip title="Copy">
            <IconButton onClick={handleClick}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Tooltip>
          <Snackbar
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={1000}
            message="Copied to clipboard"
          />
        </>
    )
}

export default CopyToClipboardButton