package com.Tisj.api.controllers;

import com.Tisj.api.Interfaces.ISystem;
import com.Tisj.bussines.entities.*;



public class Factory {

    public ISystem CrearSystem() {
        return System.getInstance();
    }

    public Cliente CrearCliente() {
        return new Cliente();
    }

    public ContentCreator CrearContentCreator() {
        return new ContentCreator();
    }

    public Admin CrearAdmin() {
        return new Admin();
    }

    public Carrito CrearCarrito() {
        return new Carrito();
    }

    public Pago CrearPago() {
        return new Pago();
    }
}

