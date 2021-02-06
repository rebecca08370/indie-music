import React from 'react'

const Test = () => {
  return (
    <div class="col-lg-12">
      <h2 class="mb-5">
        <span>Basic Elements</span>
      </h2>
      <h3 class="h4 text-success font-weight-bold mb-4">Buttons</h3>
      <div class="mb-3 mt-5">
        <small class="text-uppercase font-weight-bold">Pick your color</small>
      </div>
      <button type="button" class="btn btn-primary">
        Primary
      </button>
      <button type="button" class="btn btn-info">
        Info
      </button>
      <button type="button" class="btn btn-success">
        Success
      </button>
      <button type="button" class="btn btn-danger">
        Danger
      </button>
      <button type="button" class="btn btn-warning">
        Warning
      </button>
      <button type="button" class="btn btn-default">
        Default
      </button>
      <button type="button" class="btn btn-secondary">
        Secondary
      </button>
      <div class="mb-3 mt-5">
        <small class="text-uppercase font-weight-bold">Rounded</small>
      </div>
      <button type="button" class="btn btn-primary btn-round">
        Primary
      </button>
      <button type="button" class="btn btn-info btn-round">
        Info
      </button>
      <button type="button" class="btn btn-success btn-round">
        Success
      </button>
      <button type="button" class="btn btn-danger btn-round">
        Danger
      </button>
      <button type="button" class="btn btn-warning btn-round">
        Warning
      </button>
      <button type="button" class="btn btn-default btn-round">
        Default
      </button>
      <button type="button" class="btn btn-secondary btn-round">
        Secondary
      </button>
      <div class="mb-3 mt-5">
        <small class="text-uppercase font-weight-bold">Outline</small>
      </div>
      <button type="button" class="btn btn-outline-primary">
        Primary
      </button>
      <button type="button" class="btn btn-outline-info">
        Info
      </button>
      <button type="button" class="btn btn-outline-success">
        Success
      </button>
      <button type="button" class="btn btn-outline-danger">
        Danger
      </button>
      <button type="button" class="btn btn-outline-warning">
        Warning
      </button>
      <button type="button" class="btn btn-outline-default">
        Default
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Secondary
      </button>
      <div class="mb-3 mt-5">
        <small class="text-uppercase font-weight-bold">Outline Rounded</small>
      </div>
      <button type="button" class="btn btn-outline-primary btn-round">
        Primary
      </button>
      <button type="button" class="btn btn-outline-info btn-round">
        Info
      </button>
      <button type="button" class="btn btn-outline-success btn-round">
        Success
      </button>
      <button type="button" class="btn btn-outline-danger btn-round">
        Danger
      </button>
      <button type="button" class="btn btn-outline-warning btn-round">
        Warning
      </button>
      <button type="button" class="btn btn-outline-default btn-round">
        Default
      </button>
      <button type="button" class="btn btn-outline-secondary btn-round">
        Secondary
      </button>
      <div class="mb-3 mt-5">
        <small class="text-uppercase font-weight-bold">Links</small>
      </div>
      <button type="button" class="btn btn-link text-primary">
        Primary
      </button>
      <button type="button" class="btn btn-link text-info">
        Info
      </button>
      <button type="button" class="btn btn-link text-success">
        Success
      </button>
      <button type="button" class="btn btn-link text-danger">
        Danger
      </button>
      <button type="button" class="btn btn-link text-warning">
        Warning
      </button>
      <button type="button" class="btn btn-link text-default">
        Default
      </button>
      <button type="button" class="btn btn-link text-secondary">
        Secondary
      </button>
      <div>
        <div class="mb-3 mt-5">
          <small class="text-uppercase font-weight-bold">Pick your style</small>
        </div>
        <button class="btn btn-primary" type="button">
          Button
        </button>
        <button class="btn btn-icon btn-3 btn-primary" type="button">
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17"></i>
          </span>
          <span class="btn-inner--text">Left icon</span>
        </button>
        <button class="btn btn-icon btn-3 btn-primary" type="button">
          <span class="btn-inner--text">Right icon</span>
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17"></i>
          </span>
        </button>
        <button class="btn btn-icon btn-primary" type="button">
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17"></i>
          </span>
        </button>
        <div class="mb-3 mt-5">
          <small class="text-uppercase font-weight-bold">Pick your size</small>
        </div>
        <button class="btn btn-sm btn-primary" type="button">
          Small
        </button>
        <button class="btn btn-1 btn-primary" type="button">
          Regular
        </button>
        <button class="btn btn-lg btn-primary" type="button">
          Large Button
        </button>
        <div class="mb-3 mt-5">
          <small class="text-uppercase font-weight-bold">Floating</small>
        </div>
        <button class="btn btn-sm btn-primary btn-icon-only rounded-circle" type="button">
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17"></i>
          </span>
        </button>
        <button class="btn btn-primary btn-icon-only rounded-circle" type="button">
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17"></i>
          </span>
        </button>
        <button class="btn btn-lg btn-primary btn-icon-only rounded-circle" type="button">
          <span class="btn-inner--icon">
            <i class="ni ni-bag-17"></i>
          </span>
        </button>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3 mt-5">
            <small class="text-uppercase font-weight-bold">Active & Disabled</small>
          </div>
          <div class="row">
            <div class="col-md-6">
              <button class="btn btn-primary btn-block active" type="button">
                Active
              </button>
            </div>
            <div class="col-md-6">
              <button class="btn btn-primary btn-block disabled" type="button">
                Disabled
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3 mt-5">
            <small class="text-uppercase font-weight-bold">Block Level</small>
          </div>
          <div class="row">
            <button class="btn btn-primary btn-block" type="button">
              Primary
            </button>
            <button class="btn btn-info btn-block" type="button">
              Info
            </button>
          </div>
        </div>
      </div>
      <button class="btn btn-primary btn-icon-only back-to-top" type="button" name="button">
        <i class="ni ni-bold-up"></i>
      </button>
    </div>
  )
}

export default Test
