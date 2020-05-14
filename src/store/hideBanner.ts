import { observable, action } from 'mobx';
class HideBanner {
    @observable hide: string | null = 'hrfjh';
    @action logIn(hide: string) {
        this.hide = hide;
    }
}
export default HideBanner;
