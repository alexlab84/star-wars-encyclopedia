interface HeaderProps {
    onSearch: (query: string) => void;
  }

const Header = ({onSearch}: HeaderProps) => {
    return (
        <header>
            <input 
                type="text" 
                placeholder="Search characters..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </header>
    )
};

export default Header;