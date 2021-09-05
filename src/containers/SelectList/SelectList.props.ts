interface ISelectItem {
  id: number;
  name: string;
  category: string;
  expire: number;
}

export interface ISelectListProps {
  items: ISelectItem[] | null;
  onChange: (name: string) => void;
  selectedName?: string;
}
