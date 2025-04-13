type LeftMenuProps = {
    type: string;
};

const LeftMenu = ({ type }: LeftMenuProps) => {
    return (
        <div>LeftMenu - {type}</div>
    );
};

export default LeftMenu;
