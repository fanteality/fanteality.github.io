import { observable, action } from 'mobx';
class HideBanner {
    @observable public hide: string | null = null;
    @action setHide(hide: string): void {
        this.hide = hide;
    }
}
export default new HideBanner();
