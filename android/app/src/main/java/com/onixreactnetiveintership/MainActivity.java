package com.onixreactnetiveintership;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.react.ReactActivityDelegate; // <- add this necessary import for splash
import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import for splash

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "onixReactNetiveIntership";
  }

  @Override
  protected void onCreate(Bundle saveInstanceState) {
    super.onCreate(null);
  }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
      return new ReactActivityDelegate(this, getMainComponentName()) {

        @Override
        protected void loadApp(String appKey) {
          RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
          super.loadApp(appKey);
        }
      };
    }
}
