import {ChildAsFC} from './child';

const Parent = () => {
    return <ChildAsFC color="red" onClick={() => console.log('Click')}>
        Texto passado como Children
        </ChildAsFC>
};

export default Parent;

