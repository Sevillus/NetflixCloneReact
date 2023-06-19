const Row = ({ children }) => {
    return (
        <div style={{ display: 'flex' ,justifyContent:'space-between', alignItems:"center"}}>
            {children}
        </div>
    );
};

export default Row;
