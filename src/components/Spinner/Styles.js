import injectSheet from 'react-jss';

export default injectSheet(Colors => ({
    spinner: {
        padding: '2rem 0',
        width: 0,
        margin: 'auto',
        '& > :last-child': {
            clear: 'both',
        }
    },
}));
