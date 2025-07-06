package com.cognizant.hibernatelearn;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class HibernateMain {
    public static void main(String[] args) {
        Country country = new Country();
        country.setCode("FR");
        country.setName("France");

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;

        try {
            tx = session.beginTransaction();
            session.save(country);
            tx.commit();
            System.out.println("Country saved: " + country);
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}