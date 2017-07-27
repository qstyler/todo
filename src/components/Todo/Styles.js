import injectSheet from 'react-jss';

export default injectSheet(Colors => ({
    container: {
        backgroundColor: Colors.lightGrey,
        border: '1px solid',
        borderColor: Colors.lightGreyBorder,
        borderRadius: '5px',
        marginBottom: '2rem',
    },
    containerHeader: {
        borderBottom: '1px solid',
        borderBottomColor: Colors.lightGreyBorder,
        padding: '1rem',
        '& label': {
            cursor: 'pointer',
        },
        '& > :last-child': {
            alignItems: 'center',
            display: 'flex',
        },
    },
    containerFooter: {
        borderTop: '1px solid',
        borderTopColor: Colors.lightGreyBorder,
        padding: '1rem 1rem 0 1rem',
    },
    containerSpinner: {
        padding: '2rem 0',
        width: 0,
        margin: 'auto',
        '& > :last-child': {
            clear: 'both',
        }
    },
    containerMessage: {
        color: Colors.lightColor,
        margin: '2rem auto',
        textAlign: 'center',
    },
    todo: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        padding: '1rem',
        transition: 'background .3s ease',
        '& p, & input': {
            margin: 0,
        },
        '& > :first-child': {
            marginRight: '1rem',
        },
        '&:hover': {
            background: '#eee',
        },
    },
    todoSubtext: {
        color: '#999',
    },
    todoCompleted: {
        color: Colors.lightColor,
        textDecoration: 'line-through',
    },
}));
