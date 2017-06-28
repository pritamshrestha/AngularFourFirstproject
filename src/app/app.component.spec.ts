import { AppComponent } from './app.component';
describe("myapp",function(){
it("it should be true",function(){
let app=new AppComponent();
expect(app).toBeTruthy();
});
})
