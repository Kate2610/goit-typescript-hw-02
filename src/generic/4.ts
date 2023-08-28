/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor(public props: T) {

  }
}

class PageProps implements Props {
  title: string = "";
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
