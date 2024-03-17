import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
})
export class mainComponent implements OnInit {
  checkboxes!: { isHoge: boolean; isPiyo: boolean };

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkboxes = { isHoge: false, isPiyo: false };
  }

  onCheckedChange(checkboxId: string, e?: Event) {
    // `e`がundefinedではないときだけ、チェック状態を更新
    if (e) {
      const isChecked = (e.target as HTMLInputElement).checked;
      console.log('isChecked:', isChecked, 'checkboxId:', checkboxId);

      if (checkboxId === 'hoge') {
        this.checkboxes.isHoge = isChecked;
        // 'hoge'がチェックされた場合、'piyo'をfalseに設定
        if (isChecked) this.checkboxes.isPiyo = false;
      }
    } else {
      // ボタン('piyo')がクリックされた場合の処理
      if (checkboxId === 'piyo') {
        // ここでは`isPiyo`の値を直接変更しないか、特定の処理を実行
        console.log('PIYO button clicked');
        // 必要に応じて`isPiyo`の値を変更するロジックをここに追加
        this.router.navigate(['/error']); // 別の画面にナビゲート
      }
    }
  }
}
